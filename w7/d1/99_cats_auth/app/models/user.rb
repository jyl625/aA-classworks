# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  user_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    attr_reader :password
    
    after_initialize :ensure_session_token

    validates :user_name, :session_token, presence: true, uniquness: true
    validates :password_digest, presence: true 
    validates :password, length: {minimum: 6}, allow_nil: true
    

    # so we don't store password as string but as a digest
    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password 
    end


    #ensuring session token and resetting session token
    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
    
    def reset_session_token! #generates new token and returns new token
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end
 
 
    #special purpose find_by for logging in
    def self.find_by_credentials(user_name, password)
        user = User.find_by(user_name: user_name)
        if user && user.is_valid_password?(password)
            return user
        else
            nil
        end
    end

    def is_valid_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
        #BCrypt::Password.new(self.password_digest) == BCrypt::Password.create(password)
    end

end

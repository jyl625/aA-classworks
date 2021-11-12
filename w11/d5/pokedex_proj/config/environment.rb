# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Convert snake_case keys to camelCase.
Jbuilder.key_format camelize: :lower

json.pokemon do
  json.set! @poke.id do 
    json.merge! @poke.attributes.except("created_at", "updated_at")
    # json.extract! @poke, :id, :name, :attack, :defense, :poke_type, :image_url
  end
end
json.moves do 
    @poke.moves.each do |move|
      json.set! move.id do
        json.merge! move.attributes.except("created_at", "updated_at")
        # json.extract! move, :id, :name
      end
  end
end
json.items do 
  @poke.items.each do |item|
    json.set! item.id do 
      json.merge! item.attributes.except("created_at", "updated_at")
      # json.extract! item, :id, :pokemon_id, :name, :price, :happiness, :image_url
    end
  end
end
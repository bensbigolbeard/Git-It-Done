json.array!(@lists) do |list|
  json.extract! list, :title, :details, :id
  json.url lists_url(list, format: :json)
end
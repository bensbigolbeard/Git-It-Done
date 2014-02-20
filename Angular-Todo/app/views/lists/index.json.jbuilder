json.array!(@lists) do |list|
  json.extract! list, :title, :details
  json.url lists_url(list, format: :json)
end
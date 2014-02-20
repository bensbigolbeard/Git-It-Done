json.array!(@tasks) do |task|
  json.extract! task, :title, :details
  json.url tasks_url(task, format: :json)
end
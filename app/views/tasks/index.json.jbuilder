json.array!(@tasks) do |task|
  json.extract! task, :title, :details, :checked
  json.url tasks_url(task, format: :json)
end
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
List.create!([
  {:title => "List 1", :details => "The details of the list"},
  {:title => "List 2", :details => "The details of the list"}
]);

List.first.tasks.create!([
  {:title => "task 1", :details => "the details of the task 1"},
  {:title => "task 5", :details => "the details of the task 5"},
  {:title => "task 3", :details => "the details of the task 3"}
]);

List.last.tasks.create!([
  {:title => "task 4", :details => "the details of the task 4"},
  {:title => "task 2", :details => "the details of the task 2"},
  {:title => "task 6", :details => "the details of the task 6"}
]);
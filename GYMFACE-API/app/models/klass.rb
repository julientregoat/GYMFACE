require 'watir'
require 'webdrivers'

class Klass < ApplicationRecord
  has_many :user_klasses
  has_many :users, through: :user_klasses

  def self.fetchKlasses(location_id, date = Date.today.strftime("%Y-%m-%d"))
    # needs YYYY-MM-DD format

    url = 'https://www.equinox.com/classschedule?clubs=' + location_id.to_s + "&date=" + date

    browser = Watir::Browser.new(:chrome)
    browser.goto(url)
    sleep 2
    page = Nokogiri::HTML(browser.html)

    # .search-result-row is the class of every item
    # .search-result-row.class-info provides the class info
    # => h2 has the class title
    # => .icon-time span has the time
    # => .icon-trainer span has the trainer
    # => .icon-marker span has the location

    klasses = page.css('.search-result-row .class-info')
    klasses.each do |klass|
      puts name = klass.css('h2').text.strip #title
      time = klass.css('.icon-time').text.strip.split(" - ")
      puts start = date + " " + time.first
      puts ending = date + " " + time.last
      puts trainer = klass.css('.icon-trainer').text.strip #trainer
      byebug
      # Klass.find_or_create_by(name: name, instructor: trainer, start_time: start, end_time: ending)
    end
    browser.close
  end
end

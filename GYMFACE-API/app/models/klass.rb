require 'watir'
require 'webdrivers'

class Klass < ApplicationRecord
  has_many :user_klasses
  has_many :users, through: :user_klasses

  def self.fetchClasses(location_id)
    url = 'https://www.equinox.com/classschedule?clubs=' + location_id.to_s
    browser = Watir::Browser.new(:chrome)
    browser.goto(url)
    sleep 2
    page = Nokogiri::HTML(browser.html)
    # search-result-row is the class of every item, rendered in JS
    byebug
    browser.close
  end
end

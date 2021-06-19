# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

pub = Pub.create([
  {
    name: "The Royal Standard of England",
    image_url: "https://lirp.cdn-website.com/09c5c8f8/dms3rep/multi/opt/logo-204w.png"
  },
  {
    name: "The Brazen Head",
    image_url: "http://www.brazenhead.com/img/logos/brazen-logo.png"
  },
  {
    name: "Ól Irish Pub",
    image_url: "https://www.olirishpubs.com/wp-content/uploads/2014/11/logo-to-usesmall1.png"
  },
  {
    name: "Oneills Pub",
    image_url: "http://www.oneillspubdublin.com/wp-content/uploads/2015/12/oneills-logo.png"
  },
  {
    name: "Sheridans Irish Pub",
    image_url: "http://www.sheridansirishpub.com.br/wp-content/uploads/2016/10/Logo-Sheridans-e1511798254159.png"
  },
])

reviews = Review.create([
  {
    title: "Great Place to have fun!",
    description: "Amazing beers, food and music!",
    score: 5,
    pub: pub.first
  },
  {
    title: "Nice Pub",
    description: "Nice place, but a little expensive",
    score: 3,
    pub: pub.first
  }
])
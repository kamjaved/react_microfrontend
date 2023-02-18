## SOURCE: UDEMY [Microfrontends with React: A Complete Developer's Guide By Stepehen Grider ](https://www.udemy.com/course/microfrontend-course/r) 
 

## HtmlWebpackPlugin

HtmlWebpackPlugin used to map & inject genretaed js file into the index.html file so that browser can able to read compiled files
So, HtmlWebpackPlugin is gonna take a look at whatever files are coming out of our Webpack process.
It's going to find those file names, and then add the appropriate script tags automatically behind the scenes to this HTML snippet right here.


## shared 
So at present, products and cart are making use of faker dependency,they are both loading their own copy of it.
This is not very good,So all we're doing here is saying that if we ever try to
require in or import the Faker module,let's try to share it. by adding `shared:['faker]` in our webpack we make sure if some other application inside of our container has already loaded up the Faker.

**But there might be some scenarios** where we want to have different versions of a library, which would imply that we want to load up different copies. But we might want to actually prevent that behavior cause if we do load up different copies we would end up with some kind of error. So to get started I'm gonna find shared right here and we're going to define the shared options using
a slightly different syntax.
 `shared:['faker]` ==> `shared:{faker:{singleton:true}}`
Rather than putting an array of strings, I'm gonna put an object with a key of faker and then we're gonna put in here singleton true.Singleton true means that we only want to load up one. single copy of faker no matter what, only one copy.

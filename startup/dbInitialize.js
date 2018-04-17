const mongoose = require('mongoose');
let mongo_url = 'mongodb://localhost:27017/iti_ismailia';
if(proccess.env.NODE_ENV === 'production'){
  mongo_url = 'mongodb://ashba7_UI:ashba7_UI@ds249269.mlab.com:49269/iti_ismailia'
}
mongoose.connect(mongo_url);

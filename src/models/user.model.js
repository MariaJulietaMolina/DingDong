//USER ADMIN
import mongose from 'mongose';


const userSchema = mongose.Schema({
 username: {
    type: String,
    required: true,
    trim: true
 },
 email: {
    type: String,
    required: true,
    unique: true
 },
 password: {
    type: String,
    required: true
 }

})

export default mongosee.model('User',userSchema)
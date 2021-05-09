import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
function Profile(props) {
    return (
      <div className="container">
   <form >
  <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input type="name" className="form-control" id="email" defaultValue={props.fullName}/>
  </div>
  <div className="form-group">
    <label htmlFor="bio">BIO</label>
    <input type="text" className="form-control" id="bio" defaultValue={props.bio}/>
  </div>
  <div className="form-group">
    <label htmlFor="profession">Profession</label>
    <input type="text" className="form-control" id="profession" defaultValue={props.profession}/>
  </div>
  <div className="form-group">
  {props.children}
  </div>
  <button type="submit" className="btn btn-default" onClick={() => props.alertMyInput(`${props.fullName}`)}>Click Me</button>
</form>

        </div>
    );
  }

  Profile.defaultProps = {
    fullName: "Sami",
    bio:"Si tu veux tu peux",
    profession:"Developpeur web"


   };
   
   Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,

    
   };
   export default Profile;
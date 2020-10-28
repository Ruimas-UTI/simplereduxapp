import React from "react";
import {fetchUser} from "../actions";
import {connect} from "react-redux";

class UserHeader extends React.Component{
    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }
    render(){
        console.log(this.props.users);
        return(
            <div>UserName</div>
        )
        
    }
}
const mapStateToProps = state => {
    return { users: state.users  }
}


export default connect(mapStateToProps, {fetchUser})(UserHeader); 

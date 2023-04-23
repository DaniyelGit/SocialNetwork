import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {isRegistered, setUserDate} from "../../redux/actionsCreator/actionsForAuth";
import {UserDataType} from "../../redux/reducer/authReducer";


class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {

   componentDidMount() {
      this.props.isRegistered();
      /*axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
         withCredentials: true
      }).then(response => {
         console.log(response)
         const userData: UserDataType = response.data.data;
         this.props.setUserDate(userData)
      })*/
   }

   render() {
      return <Header userData={this.props.userData} isAuth={this.props.isAuth}/>
   }
}

type MapStateToPropsType = {
   userData: UserDataType,
   isAuth: boolean
}
type MapDispatchToPropsType = {
   setUserDate: (userData: UserDataType) => void
   isRegistered: () => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      userData: state.auth.userData,
      isAuth: state.auth.isAuth,
   }
}

export default connect(mapStateToProps, {
   setUserDate, isRegistered,
})(HeaderContainer);












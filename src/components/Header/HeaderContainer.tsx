import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {getAuthUserData, setUserDate} from "../../redux/actionsCreator/actionsForAuth";
import {UserDataType} from "../../redux/reducer/authReducer";


class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {

   componentDidMount() {
      this.props.getAuthUserData();
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
   getAuthUserData: () => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      userData: state.auth.userData,
      isAuth: state.auth.isAuth,
   }
}

export default connect(mapStateToProps, {
   setUserDate, getAuthUserData,
})(HeaderContainer);












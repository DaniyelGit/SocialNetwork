import React, {ChangeEvent} from 'react';

type LocalStateProfileStatus = {
   modeEdit: boolean,
   status: string
};

type ProfileStatusPropsType = {
   profileStatus: string
   updateStatusProfile: (statusText: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, LocalStateProfileStatus> {
   state = {
      modeEdit: false,
      status: this.props.profileStatus,
   }

   activateEditMode = () => {
      this.setState({
         modeEdit: true
      })
   };

   deactivateEditMode = () => {
      this.setState({
         modeEdit: false
      });
      this.props.updateStatusProfile(this.state.status);
   }

   onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
      this.setState({
         status: e.currentTarget.value
      })
   }


   render() {
      return (
         <>
            {
               this.state.modeEdit ?
                  <div>
                     <input type="text" value={this.state.status} autoFocus
                            onBlur={this.deactivateEditMode} onChange={this.onChangeStatus}/>
                  </div>
                  : <div>
                     <span onDoubleClick={this.activateEditMode}>{this.props.profileStatus || 'Что у вас нового?'}</span>
                  </div>
            }
         </>
      );
   }
}
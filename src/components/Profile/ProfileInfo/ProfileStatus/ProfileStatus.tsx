import React, {ChangeEvent} from 'react';

/*export class ProfileStatus extends React.Component<ProfileStatusPropsType, LocalStateProfileStatus> {
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

   componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: LocalStateProfileStatus) {
      if (prevProps.profileStatus !== this.props.profileStatus) {
         this.setState({
            status: this.props.profileStatus
         });
      }
   };


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
}*/

export const ProfileStatus = ({profileStatus, updateStatusProfile}: ProfileStatusPropsType) => {

   const [status, setStatus] = React.useState<string>(profileStatus);
   const [editMode, setEditMode] = React.useState<boolean>(false);

   const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value);
   };

   const deactivateEditMode = () => {
      setEditMode(false);
      updateStatusProfile(status);
   };

   const activateEditMode = () => {
      setEditMode(true);
   }

   return (
      <>
         {
            editMode ?
               <div>
                  <input type="text" value={status} autoFocus
                         onBlur={deactivateEditMode} onChange={onChangeStatus}/>
               </div>
               : <div>
                  <span onDoubleClick={activateEditMode}>{profileStatus || 'Что у вас нового?'}</span>
               </div>
         }
      </>
   );

};

// types

type LocalStateProfileStatus = {
   modeEdit: boolean,
   status: string
};

type ProfileStatusPropsType = {
   profileStatus: string
   updateStatusProfile: (statusText: string) => void
}
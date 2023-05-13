import React from 'react';

export class ProfileStatus extends React.Component<{ status: string }, { modeEdit: boolean }> {
   state = {
      modeEdit: false,
   }

   activateEditMode = () => {
      this.setState({
         modeEdit: true
      })
   };

   deactivateEditMode = () => {
      this.setState({
         modeEdit: false
      })
   }


   render() {
      return (
         <>
            {
               this.state.modeEdit ?
                  <div>
                     <input type="text" value={this.props.status} autoFocus
                            onBlur={this.deactivateEditMode}/>
                  </div>
                  : <div>
                     <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                  </div>
            }
         </>
      );
   }
}
import React from 'react';

export class ProfileStatus extends React.Component<{ status: string }, { modeEdit: boolean }> {
   state = {
      modeEdit: false,
   }

   activateEditMode() {
      this.setState({
         modeEdit: true
      })
   };

   deactivateEditMode() {
      this.setState({
         modeEdit: false
      })
   }


   render() {
      console.log(this);
      return (
         <>
            {
               this.state.modeEdit ?
                  <div>
                     <input type="text" value={this.props.status} autoFocus
                            onBlur={this.deactivateEditMode.bind(this)}/>
                  </div>
                  : <div>
                     <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                  </div>
            }
         </>
      );
   }
}
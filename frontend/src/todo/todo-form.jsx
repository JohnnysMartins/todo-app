import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/icon-button'



export default props => (
    <div role='form' className='form-row'>
        <Grid cols='12 9 10'>
            <input type="text" id='description' className='form-control'
            onChange={props.handleChange} value={props.description} placeholder='Adicione uma tarefa'/>
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton styleClass='primary' icon='plus' onClick={props.handleAdd}> </IconButton>
        </Grid>
    </div>
)
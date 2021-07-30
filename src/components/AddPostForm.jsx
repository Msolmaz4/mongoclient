import React from 'react'
import { DialogActions, makeStyles } from '@material-ui/core';
import{
    Button,
    TextField,
    Select,
    Input,
    MenuItem,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core'
import { useForm ,Controller} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
 



const useStyles=makeStyles(theme =>({

    paper:{
        padding:theme.spacing(2)
    },
    textField:{
        marginBottom:theme.spacing(2)
    },
}));

const tags = ['fun','programming','health','csience'];
const postSchema=yup.object().shape({
    title:yup.string().required(),
    subtitle:yup.string().required(),
    
    content:yup.string().min(20).required(),
    tag:yup.mixed().oneOf(tags),
})
const AddPostForm =({open,handleClose})=>{

    const{ register,handleSubmit,control,errors,reset} = useForm({
        resolver:yupResolver(postSchema)
    })
    const classes =useStyles();

    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Yeni Yazi Olustur</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    yeni yazi eklemek icin asagidaki formu doldurun
                </DialogContentText>
           
             <div className={classes.root}>
                <form noValidate autoComplete='off'>
                <TextField
                 id='title'
                 label='Baslik'
                 name='title'
                 variant='outlined'
                 clasName={classes.texField}
                 size='small'
                 inputRef={register}
                 //error={errors.title ? true : false}
                 fullWidth
                />
                <TextField
                 id='subtitle'
                 label='Alt Baslik'
                 name='subtitle'
                 variant='outlined'
                 clasName={classes.texField}
                 size='small'
                 inputRef={register}
                 //error={errors.subtitle ? true :false}
                 fullWidth
                />
                <Controller
                 as={
                     <Select
                     input={<Input/>}
                     className={classes.TextField}
                     fullWidth
                     >
                            {
                                tags.map((tag,index)=>(
                                    <MenuItem key={index} value={tag}>
                                        {tag}
                                    </MenuItem>

                                ))
                            }

                     </Select>
                 }

                name='tag'
                control={control}
               // error={errors.tag ? true: false}
                defaultValue={tags[0]}


                />
                 <TextField
                 id='content'
                 label='icerik'
                 name='content'
                 multiline
                 row={4}
                 variant='outlined'
                 clasName={classes.texField}
                 size='small'
                 inputRef={register}
                 //error={errors.content ? true :false}
                 fullWidth
                /> 
                </form>

            </div>
             </DialogContent>
             <DialogActions>
                 <Button color='inherit'>Vazgec</Button>
                 <Button type='submit' variant='outlined' color='primary'>Yayinla</Button>
             </DialogActions>

        </Dialog>
    )
};
export default AddPostForm;
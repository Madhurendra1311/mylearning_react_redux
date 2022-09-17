import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate, useParams  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addUser, getSingleUser, updateUser } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
    marginTop: 100,
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '45ch',
      },
    },
  }));

const EditUser = () => {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    let {id} = useParams();
    const classes = useStyles();
    const { user } = useSelector((state) => state.data);
    const [state, setState] = useState({
        name: '',
        email: '',
        contact: '',
        address: ''
    });
    const [error, setError] = useState("")

    useEffect(() => {
        dispatch(getSingleUser(id))
    }, []);  

    useEffect(() => {
        if(user){
            setState({...user})
        }
    }, [user])

    const { name, email, contact, address } = state;

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !address || !contact || !address) {
            setError('Please input all the input field')
        } else {
            dispatch(updateUser(state, id));
            navigate('/')
            setError("")
        }
    }
    return (
        <div>
            <Button style={{width: '100px', marginTop: '20px'}} variant='contained' color='secondary' onClick={() => navigate('/')}>
                Go Back
            </Button>
            <h2>Edit User</h2>
            {error && <h2 style={{ color: 'red'}}>{error}</h2>}
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="Name" name='name' value={name || ""} type='text' onChange={handleInputChange} />
                <br/>
                <TextField id="standard-basic" label="Email" name='email' value={email || ""} type='text' onChange={handleInputChange} />
                <br/>
                <TextField id="standard-basic" label="Contact" name='contact' value={contact || ""} type='number' onChange={handleInputChange} />
                <br/>
                <TextField id="standard-basic" label="Address" name='address' value={address || ""} type='address' onChange={handleInputChange} />
                <br/>
                <Button style={{width: '100px'}} variant='contained' color='primary' type='submit'>
                    Update
                </Button>
            </form>
        </div>
    )
}

export default EditUser;

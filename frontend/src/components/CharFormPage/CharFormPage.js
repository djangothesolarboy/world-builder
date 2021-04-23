import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './CharFormPage.css';
import { createChar } from '../../store/char';

function CharFormPage() {
    const userId = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    const [state, setState] = useState({
        name: '', 
        bio: '', 
        userId: '',
        age: '', 
        gender: '', 
        height: '',
        bodyType: '', 
        hairColor: '', 
        race: ''
    })
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createChar({
            name:state.name, 
            bio:state.bio, 
            userId:userId.id,
            age:state.age, 
            gender:state.gender, 
            height:state.height,
            bodyType:state.bodyType, 
            hairColor:state.hairColor, 
            race:state.race 
        }));
        console.log('user -->', userId)
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to='/'/>
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    }

    return (
        <div className='character-form-container'>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="_csrf" value="{{csrfToken}}"/>
                <label>
                    Name: 
                    <input name='name' value={state.name} onChange={handleChange} className='char-name-input'/>
                </label>
                <label>
                    Age: 
                    <input type='number' name='age' value={state.age} onChange={handleChange} className='char-age-input'/>
                </label>
                <label>
                    Bio: 
                    <input name='bio' value={state.bio} onChange={handleChange} className='char-bio-input'/>
                </label>
                <label>
                    Gender:
                    <input name='gender' value={state.gender} onChange={handleChange} className='char-gender-input'/>
                </label>
                <label>
                    Height: 
                    <input name='height' value={state.height} onChange={handleChange} className='char-height-input'/>
                </label>
                <label>
                    Body Type: 
                    <input name='bodyType' value={state.bodyType} onChange={handleChange} className='char-bodyType-input'/>
                </label>
                <label>
                    Hair Color: 
                    <input name='hairColor' value={state.hairColor} onChange={handleChange} className='char-hairColor-input'/>
                </label>
                <label>
                    Race: 
                    <input name='race' value={state.race} onChange={handleChange} className='char-race-input'/>
                </label>
                <button type='submit' className='char-button'>Submit</button>
            </form>
        </div>
    )

}

export default CharFormPage;
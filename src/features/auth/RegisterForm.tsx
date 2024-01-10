// Modifed the loginForm file
import { Button, Form } from 'semantic-ui-react';
import { FieldValues, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../app/store/store';
import ModalWrapper from '../../app/common /modals/ModalWrapper';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../app/config/firebase';
import { closeModal } from '../../app/common /modals/modalSlice';


export default function RegisterForm() {
    const { register, handleSubmit, formState: { isSubmitting, isValid, isDirty, errors } } = useForm({
        mode: 'onTouched'
    })
    const dispatch = useAppDispatch();


    async function onSubmit(data: FieldValues) {
        try {
            const userCreds = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await updateProfile(userCreds.user, {
                displayName: data.displayName
            })
            // dispatch(signIn(userCreds.user));
            dispatch(closeModal());
           
        } catch (error) {
            console.log(error);
            // setError('root.serverError', {
            //     type: '400', message: error.message
            // })
        }
    }
    return (
        <ModalWrapper header='Register to re-vents'>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Input 
                    // type='password'
                    defaultValue=''
                    placeholder='Display name'
                    {...register('displayName', {required: true})}
                    error={errors.displayName && 'Display name is required'}
                />
                <Form.Input 
                    defaultValue=''
                    placeholder='Email address'
                    {...register('email', {required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/})}
                    // pattern is a second validation tools got from https://www.regexlib.com/?AspxAutoDetectCookieSupport=1
                    error={
                        errors.email?.type === 'required' && 'Email is required' ||
                        errors.email?.type === 'pattern' && 'Email is invalid'
                    }
                />
                <Form.Input 
                    type='password'
                    defaultValue=''
                    placeholder='Password'
                    {...register('password', {required: true})}
                    error={errors.password && 'Password is required'}
                />
                <Button 
                    loading={isSubmitting}
                    disabled={!isValid || !isDirty || isSubmitting}
                    type='submit'
                    // so that they can press return or press the button
                    fluid
                    // fluid for full width
                    size='large'
                    color='teal'
                    // content='Login'
                    content='Resgister'
                />
            </Form>
        </ModalWrapper>
    )
}
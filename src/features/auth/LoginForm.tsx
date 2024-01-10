import { Button, Form, Label } from 'semantic-ui-react';
// import ModalWrapper from '../../app/common/modals/ModalWrapper';
import { FieldValues, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../app/store/store';
import ModalWrapper from '../../app/common /modals/ModalWrapper';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../app/config/firebase';
// import { signIn } from './authSlice';
import { closeModal } from '../../app/common /modals/modalSlice';
// import { closeModal } from '../../app/common/modals/modalSlice';
// import { signIn } from './authSlice';

export default function LoginForm() {
    // const {register, handleSubmit, formState: {isSubmitting, isValid, isDirty, errors}} = useForm({
    //     mode: 'onTouched'
    // })

    
    const { register, handleSubmit, setError, formState: { isSubmitting, isValid, isDirty, errors } } = useForm({
        mode: 'onTouched'
    })
    const dispatch = useAppDispatch();

    // function onSubmit(data: FieldValues) {
    //     dispatch(signIn(data))
    //     dispatch(closeModal());
    // }
    async function onSubmit(data: FieldValues) {
        try {
            // const result = await signInWithEmailAndPassword(auth, data.email, data.password);
            await signInWithEmailAndPassword(auth, data.email, data.password);
            // console.log(result);
            // dispatch(signIn(result.user)); as already done the sign in the top level App.tsx file.
            dispatch(closeModal());
            // await signInWithEmailAndPassword(auth, data.email, data.password);
            // dispatch(closeModal());
        } catch (error: any ) {
            //  error type is made any to avoid TypeScript error
            // console.log(error)
            setError('root.serverError', {
                type: '400', message: error.message
            })
        }
    }
    return (
        <ModalWrapper header='Sign into re-vents'>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                    {errors.root && (
                    <Label 
                        basic color='red' 
                        style={{display: 'block', marginBottom: 10}} 
                        content={errors.root.serverError.message}
                    />
                )}

                <Button 
                    loading={isSubmitting}
                    disabled={!isValid || !isDirty || isSubmitting}
                    type='submit'
                    // so that they can press return or press the button
                    fluid
                    // fluid for full width
                    size='large'
                    color='teal'
                    content='Login'
                />
            </Form>
        </ModalWrapper>
    )
}
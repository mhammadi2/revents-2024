// Copied from ProfieABout as it has the same structure and then modifed
import { useEffect, useState } from 'react';
import { Tab, Grid, Header, Button, Card, Image } from 'semantic-ui-react';
import { Photo, Profile } from '../../app/types/profile';
import { auth } from '../../app/config/firebase';
import PhotoUpload from './PhotoUpload';
import { useAppSelector } from '../../app/store/store';
import { useFireStore } from '../../app/hooks/firestore/useFirestore';
import { actions } from './photosSlice';
import { updateProfile } from 'firebase/auth';
import { deleteObject, ref } from 'firebase/storage';
import { toast } from 'react-toastify';

type Props = {
    profile: Profile
}

export default function ProfilePhotos({ profile }: Props) {
    const [editMode, setEditMode] = useState(false);
    const isCurrentUser = auth.currentUser?.uid === profile.id;


    return (
        <Tab.Pane >
            <Grid>
                <Grid.Column width={16}>
                    <Header floated='left' icon='photo' content='Photos' />
                    {isCurrentUser &&
                        <Button
                            floated='right'
                            basic
                            content={editMode ? 'Cancel' : 'Add photo'}
                            onClick={() => setEditMode(!editMode)}
                        />}
                </Grid.Column>
                <Grid.Column width={16}>
                    {/* {editMode ? <PhotoUpload profile={profile} setEditMode={setEditMode} /> : ( */}
                    {editMode ? <p> Photo Upload Goes Here</p> : (
                        <Card.Group itemsPerRow={5}>
                        
                                <Card>
                                    <Image src='/user.png'/>
                                    {isCurrentUser &&
                                        <Button.Group>
                                            <Button 
                                                basic 
                                                color='green'
                                            
                                            >
                                                    Main
                                            </Button>
                                            <Button 
                                                basic color='red' 
                                                icon='trash' 
                                                
                                            />
                                        </Button.Group>
                                    } </Card>
                           
                        </Card.Group>
                    )}
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
} 
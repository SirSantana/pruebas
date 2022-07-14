
import { useEffect, useState } from 'react';
import Form from '../../components/form/form';
import PostsComponent from '../../components/posts/posts';
import styles from '../../styles/Home.module.css'

export default function Home(){
    
    console.log('Hola');
    return(
        <div className={styles.main}>
            <PostsComponent />
            <Form/>
        </div>
    )
}

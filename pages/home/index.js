
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'

export default function Home(){
    
    console.log('Hola');
    return(
        <div className={styles.main}>
            <h2>Agregar Usuario</h2>
            <form>
            <input type='text' placeholder='Nombre'/>
            <input type='email' placeholder='Email'/>
            <input type='submit' placeholder='Agregar'/>
            </form>

        </div>
    )
}

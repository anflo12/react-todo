import * as SQLite from 'expo-sqlite'
import { Platform } from 'react-native';
export function openDatabase() {
    
    const db = SQLite.openDatabase("db.todo","1")
    
    return db;
  }
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import RecentChat from '../components/layout/RecentChat';

export type Theme = 'light' | 'dark';

//interface cho theme
interface ThemeState {
    currentTheme: Theme;
    nameTitleChat: string;
    layout: React.ReactNode;
}

//khởi tạo state ban đầu
const initialState: ThemeState = {
    currentTheme: 'light',
    nameTitleChat: 'Pinned',
    layout: 'Recent Chat',
};

//tạo slice cho theme
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.currentTheme = action.payload;
        },
        toggleTheme: (state) => {
            state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
        },
        setNameTitleChat: (state, action: PayloadAction<string>) => {
            state.nameTitleChat = action.payload;
        },
        setLayout: (state, action: PayloadAction<React.ReactNode>) => {
            state.layout = action.payload;
        },
    },
});

//export actions
export const { setTheme, toggleTheme, setNameTitleChat, setLayout } = themeSlice.actions;

//export reducer
export const themeReducer = themeSlice.reducer;

//tạo store
export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

//export các kiểu TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//export hooks


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//export store
export default store;

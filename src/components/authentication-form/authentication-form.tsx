import './authentication-form.scss'
import { observer } from 'mobx-react-lite';
import FieldStore from '../../stores/field-store';
import {FieldTypes} from "../../types"
import { FieldInput } from '../field-input/feld-input';
import FormStore from '../../stores/form-store'

const validationEmailStore = new FieldStore(FieldTypes.EMAIL);
const validationPasswordStore = new FieldStore(FieldTypes.PASSWORD);
const formStore = new FormStore();

export const AuthenticationForm = observer(() => {
	return (
		<section className='authentication-form'> 
			<h1>Форма аутентификации</h1>
			<form className='form' onSubmit={(evt) => {formStore.handleFormSubmit(evt, 
				{email: validationEmailStore.inputField.value, password: validationPasswordStore.inputField.value})}}>
				<FieldInput {...validationEmailStore} placeholder = {'email'} type = {'text'}>Введите email</FieldInput>
				<FieldInput {...validationPasswordStore} placeholder = {'пароль'} type = {'password'}>Введите пароль</FieldInput>
				<button type="submit" disabled = {(!validationEmailStore.inputField.isValid || !validationPasswordStore.inputField.isValid)? true : false}>Войти</button>
			</form>
		</section>
	);
});
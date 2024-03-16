import { FieldErrors, UseFormRegister } from "react-hook-form";

export const NavLinks = {
  to: "",
  text: "",
};

export const IconProps = {
  iconName: "",
  width: "",
  height: "",
  fill: "",
  transform: "",
  stroke: "",
};

export const FormData = {
  username: "",
  email: "",
  password: "",
};

export const InputAuthInter = {
  name: "",
  placeholder: "",
  register: UseFormRegister(FormData),
  errors: FieldErrors,
};

export const InputsAuthInter = {
  name: "",
  placeholder: "",
};

export const ModalInitialStateInter = {
  openModal: false,
  modalContent: "",
  makeAppointment: { name: "", avatar_url: "" },
};

export const ButtonEyeInter = {
  togglePasswordVisibility: () => {},
  passwordVisible: false,
};

export const AuthOptionsInter = {
  email: "",
  password: "",
  username: "",
  modalType: "",
  reset: () => {},
};

export const AuthUserDataInter = {
  name: "",
  email: "",
  token: "",
  id: "",
};

export const StyledOptionInter = {
  value: "",
  label: "",
};

export const PsychologistInter = {
  avatar_url: "",
  name: "",
  rating: 0,
  price_per_hour: 0,
  experience: "",
  license: "",
  specialization: "",
  initial_consultation: "",
  about: "",
  reviews: [],
};

export const PsychologistsStateinter = {
  psychologists: [],
};

export const OptionSelectMeetingTime = {
  label: "",
  value: "",
  isDisabled: false,
};

export const SelectMeetingTimeProps = {
  onChange: () => {},
  onBlur: () => {},
  disabled: false,
  name: "",
  $error: false,
};

export const FormDataMakeAppointment = {
  userName: "",
  email: "",
  userPhone: "",
  meetingTime: "",
  userComment: "",
};

export const InputFormProps = {
  name: "",
  placeholder: "",
  type: "",
  register: UseFormRegister(FormDataMakeAppointment),
  errors: FieldErrors,
  width: "",
};

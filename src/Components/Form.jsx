import React, { useState } from 'react';
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.nombre.trim()) {

    newErrors.nombre="Debe ingresar un nombre válido"
    }

    if (!formData.apellido.trim()) {

        newErrors.apellido="Debe ingresar un apellido válido"
        }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Ingrese un correo electrónico válido';
    }

    const phoneRegex = /^[0-9]{9}$/;
    if (!formData.telefono.trim() || !phoneRegex.test(formData.telefono)) {
      newErrors.telefono = 'Ingrese un número de teléfono válido (9 dígitos)';
    }

    const passRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{5,}$/;
    if (!formData.password.trim() || !passRegex.test(formData.password)) {
        newErrors.password="Debe tener al menos cinco digitos, una mayuscula, una minúscula y un caracter especial"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    setErrors(newErrors);


let isEmpty = true;
  for (let err in newErrors) {
    if (newErrors.hasOwnProperty(err)) {
      isEmpty = false;
      break;
    }
  }

  return isEmpty;
};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Formulario válido, enviar datos:', formData);
    } else {
      console.log('Formulario inválido');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box maxW="md" mx="auto" mt="150">
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={!!errors.nombre}>
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.nombre}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.apellido} mt="4">
          <FormLabel>Apellido</FormLabel>
          <Input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.apellido}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email} mt="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.telefono} mt="4">
          <FormLabel>Teléfono</FormLabel>
          <Input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.telefono}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password} mt="4">
          <FormLabel>Contraseña (5 caracteres)</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.confirmPassword} mt="4">
          <FormLabel>Confirmar Contraseña</FormLabel>
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
        </FormControl>

        <Button mt="4" ml="160" colorScheme="teal" type="submit">
          Registrarse
        </Button>
      </form>
    </Box>
  );
};

export default RegistrationForm;

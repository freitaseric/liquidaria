import type { Story, StoryDefault } from '@ladle/react'
import { Input } from './Input'
import { Field, Label, FieldDescription, FieldError } from '../Field'
import { Icon } from '../Icon'

export default {
  title: 'Components/Input',
} satisfies StoryDefault

export const Default: Story = () => (
  <Field className="w-80">
    <Label htmlFor="email">E-mail</Label>
    <Input id="email" type="email" placeholder="Digite aqui..." />
    <FieldDescription>Você nunca receberá spam.</FieldDescription>
  </Field>
)

export const WithIcon: Story = () => (
  <Field className="w-80">
    <Label htmlFor="search">Buscar</Label>
    <div className="relative">
      <Icon
        name="Search"
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"
      />
      <Input id="search" placeholder="Pesquisar..." className="pl-10" />
    </div>
  </Field>
)

export const Invalid: Story = () => (
  <Field className="w-80">
    <Label htmlFor="password">Senha</Label>
    <Input id="password" type="password" aria-invalid placeholder="••••••••" />
    <FieldError>Senha incorreta. Tente novamente.</FieldError>
  </Field>
)

export const States: Story = () => (
  <div className="flex w-80 flex-col gap-4">
    <Field>
      <Label>Default</Label>
      <Input placeholder="Digite aqui..." />
    </Field>
    <Field>
      <Label>Com hint</Label>
      <Input placeholder="Digite aqui..." />
      <FieldDescription>Mínimo 8 caracteres.</FieldDescription>
    </Field>
    <Field>
      <Label>Com erro</Label>
      <Input aria-invalid placeholder="Digite aqui..." />
      <FieldError>Campo obrigatório.</FieldError>
    </Field>
    <Field>
      <Label>Desabilitado</Label>
      <Input disabled placeholder="Digite aqui..." />
    </Field>
  </div>
)

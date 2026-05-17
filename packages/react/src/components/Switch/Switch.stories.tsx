import React from 'react'
import type { StoryDefault } from '@ladle/react'
import { Switch } from './Switch'
import { Label } from '../Field'

export default {
  title: 'Components/Switch',
} satisfies StoryDefault

export const Playground = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <Label className="inline-flex items-center gap-2.5">
      <Switch checked={checked} onCheckedChange={setChecked} id="notif" />
      Notificações
    </Label>
  )
}

export const States = () => (
  <div className="flex flex-col gap-4">
    <Label className="inline-flex items-center gap-2.5">
      <Switch checked={false} onCheckedChange={() => {}} /> Desativado
    </Label>
    <Label className="inline-flex items-center gap-2.5">
      <Switch checked={true} onCheckedChange={() => {}} /> Ativado
    </Label>
    <Label className="inline-flex items-center gap-2.5">
      <Switch checked={false} disabled onCheckedChange={() => {}} /> Desativado (disabled)
    </Label>
    <Label className="inline-flex items-center gap-2.5">
      <Switch checked={true} disabled onCheckedChange={() => {}} /> Ativado (disabled)
    </Label>
  </div>
)

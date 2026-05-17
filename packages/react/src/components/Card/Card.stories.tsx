import type { Story, StoryDefault } from '@ladle/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './Card'
import { Button } from '../Button'

export default {
  title: 'Components/Card',
} satisfies StoryDefault

export const Composed: Story = () => (
  <Card className="w-90">
    <CardHeader>
      <CardTitle>Faturamento</CardTitle>
      <CardDescription>Resumo do mês corrente.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-semibold">R$ 12.480,00</p>
      <p className="text-sm text-muted-foreground">+18% vs. mês anterior</p>
    </CardContent>
    <CardFooter>
      <Button variant="default" size="sm">
        Ver detalhes
      </Button>
      <Button variant="ghost" size="sm">
        Exportar
      </Button>
    </CardFooter>
  </Card>
)

export const Variants: Story = () => (
  <div className="flex flex-wrap gap-4 bg-muted p-8">
    {(['flat', 'elevated', 'high', 'glass'] as const).map((variant) => (
      <Card key={variant} variant={variant} className="min-w-40">
        <CardTitle className="text-sm">{variant}</CardTitle>
        <CardDescription>Card variant</CardDescription>
      </Card>
    ))}
  </div>
)

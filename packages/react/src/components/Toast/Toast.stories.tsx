import type { StoryDefault } from '@ladle/react'
import { Toast } from './Toast'
import { Toaster, toast } from './Toaster'
import { Button } from '../Button'

export default {
  title: 'Components/Toast',
} satisfies StoryDefault

export const Variants = () => (
  <div className="flex max-w-120 flex-col gap-3">
    {(['default', 'success', 'warning', 'destructive', 'info', 'solid'] as const).map((variant) => (
      <Toast
        key={variant}
        variant={variant}
        title="Operação concluída"
        description="Suas alterações foram salvas com sucesso."
        onDismiss={() => {}}
      />
    ))}
  </div>
)

export const WithAction = () => (
  <Toast
    title="Arquivo excluído"
    action={
      <Button variant="ghost" size="sm">
        Desfazer
      </Button>
    }
    onDismiss={() => {}}
  />
)

export const Imperative = () => (
  <div className="flex flex-col items-start gap-3">
    <Toaster richColors closeButton position="bottom-right" />
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast('Mensagem padrão')}>toast()</Button>
      <Button variant="secondary" onClick={() => toast.success('Salvo com sucesso')}>
        toast.success()
      </Button>
      <Button variant="secondary" onClick={() => toast.warning('Atenção: revise os dados')}>
        toast.warning()
      </Button>
      <Button variant="destructive" onClick={() => toast.error('Falha ao processar a requisição')}>
        toast.error()
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast('Arquivo enviado', {
            description: 'Disponível para download em alguns segundos.',
            action: {
              label: 'Desfazer',
              onClick: () => toast.info('Ação desfeita'),
            },
          })
        }
      >
        com action
      </Button>
      <Button
        variant="ghost"
        onClick={() =>
          toast.promise(new Promise((r) => setTimeout(r, 1500)), {
            loading: 'Salvando...',
            success: 'Pronto!',
            error: 'Erro inesperado',
          })
        }
      >
        toast.promise()
      </Button>
    </div>
  </div>
)

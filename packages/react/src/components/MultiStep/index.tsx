import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
  color?: string
}

export function MultiStep({
  size,
  currentStep = 1,
  color = '',
}: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label css={{ color }}>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size, color }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'

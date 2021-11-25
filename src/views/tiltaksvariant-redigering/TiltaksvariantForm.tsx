import { AddCircle, Delete, Edit } from '@navikt/ds-icons';
import AlertStripe from 'nav-frontend-alertstriper';
import { Fareknapp, Hovedknapp } from 'nav-frontend-knapper';
import NavFrontendSpinner from 'nav-frontend-spinner';
import React, { useEffect } from 'react';
import { Row, Stack } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import FormInput from '../../components/form-elements/FormInput';
import { Id } from '../../core/domain/Generic';
import { Tiltaksvariant } from '../../core/domain/Tiltaksvariant';
import './TiltaksvariantForm.less';

interface TiltaksvariantFormProps {
  isLoading?: boolean;
  isError?: boolean;
  tiltaksvariant?: Tiltaksvariant;
  onSubmit: (tiltaksvariant: Tiltaksvariant) => void;
  onDelete?: () => void;
}

const TiltaksvariantForm = ({ isLoading, isError, tiltaksvariant, onSubmit, onDelete }: TiltaksvariantFormProps) => {
  type FormValues = {
    id?: Id;
    tittel: string;
    ingress: string;
    beskrivelse: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({});

  const tomtFeltErrorMessage = 'Dette feltet kan ikke være tomt';

  useEffect(() => {
    if (tiltaksvariant) {
      setValue('id', tiltaksvariant.id);
      setValue('tittel', tiltaksvariant.tittel);
      setValue('ingress', tiltaksvariant.ingress);
      setValue('beskrivelse', tiltaksvariant.beskrivelse);
    }
  }, [tiltaksvariant]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rediger-opprett-tiltaksvariant__form"
      data-testid="form__rediger-opprett"
    >
      <FormInput
        label="Tittel"
        register={register('tittel', {
          required: tomtFeltErrorMessage,
          maxLength: { value: 50, message: 'Maks 50 tegn.' },
        })}
        defaultValue={tiltaksvariant ? tiltaksvariant.tittel : ''}
        feil={errors.tittel && errors.tittel.message}
        className="rediger-opprett-tiltakstype__form__tittel"
        data-testid="input_tittel"
      />
      <FormInput
        label="Ingress"
        register={register('ingress', {
          required: tomtFeltErrorMessage,
          maxLength: { value: 250, message: 'Maks 250 tegn.' },
        })}
        defaultValue={tiltaksvariant ? tiltaksvariant.ingress : ''}
        feil={errors.ingress && errors.ingress.message}
        className="rediger-opprett-tiltakstype__form__ingress"
        data-testid="input_ingress"
      />
      <FormInput
        label="Beskrivelse"
        register={register('beskrivelse', { required: tomtFeltErrorMessage })}
        defaultValue={tiltaksvariant ? tiltaksvariant.beskrivelse : ''}
        feil={errors.beskrivelse && errors.beskrivelse.message}
        className="rediger-opprett-tiltakstype__form__beskrivelse"
        data-testid="input_beskrivelse"
      />
      <Row className="rediger-opprett-tiltaksvariant__form knapperad">
        <Stack direction="horizontal" gap={2}>
          {onDelete ? (
            <>
              <Hovedknapp htmlType="submit" data-testid="submit-knapp_rediger-tiltaksvariant">
                Rediger tiltaksvariant <Edit />
              </Hovedknapp>
              <Fareknapp
                spinner={isLoading}
                onClick={onDelete}
                htmlType="button"
                data-testid="slett-knapp_rediger-tiltakstype"
              >
                Slett tiltakstype <Delete />
              </Fareknapp>
            </>
          ) : (
            <Hovedknapp htmlType="submit" data-testid="submit-knapp_opprett-tiltaksvariant">
              Opprett tiltaksvariant <AddCircle />
            </Hovedknapp>
          )}
        </Stack>
      </Row>
      {isLoading && <NavFrontendSpinner />}
      {isError && <AlertStripe type="feil">Det har oppstått en feil</AlertStripe>}
    </form>
  );
};

export default TiltaksvariantForm;

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Stack, Row } from 'react-bootstrap';
import AlertStripe from 'nav-frontend-alertstriper';
import { Fareknapp, Hovedknapp } from 'nav-frontend-knapper';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { ReactComponent as Edit } from '../../ikoner/Edit.svg';
import { ReactComponent as Delete } from '../../ikoner/Delete.svg';
import FormInput from '../../components/form-elements/FormInput';
import { Tiltaksvariant } from '../../core/domain/Tiltaksvariant';
import { Id } from '../../core/domain/Generic';

interface RedigeringsgrensesnittFormProps {
  isLoading: boolean;
  isError: boolean;
  isEdit: boolean;
  onSubmit: (tiltaksvariant: Tiltaksvariant) => void;
  tiltaksvariant?: Tiltaksvariant;
  setModalOpen: (open: boolean) => void;
}

const RedigeringsgrensesnittForm = ({
  isLoading,
  isError,
  tiltaksvariant,
  isEdit,
  onSubmit,
  setModalOpen,
}: RedigeringsgrensesnittFormProps) => {
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
    <form onSubmit={handleSubmit(onSubmit)} className="rediger-opprett-tiltaksvariant__form">
      <FormInput
        id="tittel"
        register={register('tittel', {
          required: tomtFeltErrorMessage,
          maxLength: { value: 50, message: 'Maks 50 tegn.' },
        })}
        defaultValue={tiltaksvariant ? tiltaksvariant.tittel : ''}
        label="Tittel"
        feil={errors.tittel && errors.tittel.message}
        inputClassName={'rediger-opprett-tiltaksvariant__form__input'}
      />

      <FormInput
        id="ingress"
        register={register('ingress', {
          required: tomtFeltErrorMessage,
          maxLength: { value: 250, message: 'Maks 250 tegn.' },
        })}
        defaultValue={tiltaksvariant ? tiltaksvariant.ingress : ''}
        label="Ingress"
        feil={errors.ingress && errors.ingress.message}
        inputClassName={'rediger-opprett-tiltaksvariant__form__input'}
      />
      <FormInput
        id="beskrivelse"
        register={register('beskrivelse', { required: tomtFeltErrorMessage })}
        defaultValue={tiltaksvariant ? tiltaksvariant.beskrivelse : ''}
        label="Beskrivelse"
        feil={errors.beskrivelse && errors.beskrivelse.message}
        inputClassName={'rediger-opprett-tiltaksvariant__form__input'}
      />
      <Row className="rediger-opprett-tiltaksvariant__form knapperad">
        <Stack direction="horizontal" gap={2}>
          <Hovedknapp htmlType="submit">
            {!isEdit ? 'Opprett tiltaksvariant' : 'Rediger tiltaksvariant'} <Edit />
          </Hovedknapp>
          {isEdit && (
            <>
              <Fareknapp spinner={isLoading} onClick={() => setModalOpen(true)} htmlType="button">
                Slett tiltaksvariant <Delete />
              </Fareknapp>
            </>
          )}
        </Stack>
      </Row>
      {isLoading && <NavFrontendSpinner />}
      {isError && <AlertStripe type={'feil'}>Det har oppstått en feil</AlertStripe>}
    </form>
  );
};

export default RedigeringsgrensesnittForm;

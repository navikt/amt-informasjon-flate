import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Stack, Row } from 'react-bootstrap';
import AlertStripe from 'nav-frontend-alertstriper';
import { Fareknapp, Hovedknapp } from 'nav-frontend-knapper';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { ReactComponent as Edit } from '../../ikoner/Edit.svg';
import { ReactComponent as Delete } from '../../ikoner/Delete.svg';
import FormInput from './FormInput';

interface RedigeringsgrensesnittFormProps {
  isLoading: boolean;
  isError: boolean;
  isEdit: boolean;
  onSubmit: () => void;
  tittel: string;
  ingress: string;
  beskrivelse: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, input: string) => void;
  setModalOpen: (open: boolean) => void;
}

const RedigeringsgrensesnittForm = ({
  isLoading,
  isError,
  tittel,
  ingress,
  beskrivelse,
  isEdit,
  onSubmit,
  handleChange,
  setModalOpen,
}: RedigeringsgrensesnittFormProps) => {
  type FormValues = {
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
    setValue('tittel', tittel);
    setValue('ingress', ingress);
    setValue('beskrivelse', beskrivelse);
  }, [tittel, ingress, beskrivelse]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rediger-opprett-tiltakstype__form">
      <FormInput
        type="tittel"
        register={register('tittel', {
          required: tomtFeltErrorMessage,
          maxLength: { value: 50, message: 'Maks 50 tegn.' },
        })}
        handleChange={handleChange}
        defaultValue={tittel}
        label="Tittel"
        feil={errors.tittel && errors.tittel.message}
        inputClassName={'rediger-opprett-tiltakstype__form__input'}
      />

      <FormInput
        type="ingress"
        register={register('ingress', {
          required: tomtFeltErrorMessage,
          maxLength: { value: 250, message: 'Maks 250 tegn.' },
        })}
        handleChange={handleChange}
        defaultValue={ingress}
        label="Ingress"
        feil={errors.ingress && errors.ingress.message}
        inputClassName={'rediger-opprett-tiltakstype__form__input'}
      />
      <FormInput
        type="beskrivelse"
        register={register('beskrivelse', { required: tomtFeltErrorMessage })}
        handleChange={handleChange}
        defaultValue={beskrivelse}
        label="Beskrivelse"
        feil={errors.beskrivelse && errors.beskrivelse.message}
        inputClassName={'rediger-opprett-tiltakstype__form__input'}
      />
      <Row className="rediger-opprett-tiltakstype__form knapperad">
        <Stack direction="horizontal" gap={2}>
          <Hovedknapp htmlType="submit">
            {!isEdit ? 'Opprett tiltakstype' : 'Rediger tiltakstype'} <Edit />
          </Hovedknapp>
          {isEdit && (
            <>
              <Fareknapp spinner={isLoading} onClick={() => setModalOpen(true)} htmlType="button">
                Slett tiltakstype <Delete />
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

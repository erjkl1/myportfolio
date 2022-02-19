import { yupResolver } from '@hookform/resolvers/yup'
import { init, send } from 'emailjs-com';
import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import TemporaryDrawer from '../TemporaryDrawer';
import * as yup from 'yup'

// フォームの型
interface SampleFormInput {
  email: string
  name: string
  title: string
  body: string
}

// バリデーションルール
const schema = yup.object({
    name: yup.string().required('必須だよ'),
    email: yup
    .string()
    .required('必須だよ')
    .email('正しいメールアドレス入力してね'),
    title: yup.string().required('必須だよ'),
    body: yup.string().required('必須だよ'),
})

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SampleFormInput>({
    resolver: yupResolver(schema),
  })

  const drawerButtonStyle = {
    position:'absolute',
    left: '0',
    top: '0',
    width:'110px',
    height:'100%',
    color:'#ffffff',
    "&:hover": {
      backgroundColor:'#171717',
      cursor: 'default',
    }
  };

  // フォーム送信時の処理
  const onSubmit: SubmitHandler<SampleFormInput> = (data) => {
    // バリデーションチェックOK！なときに行う処理を追加
    const userID = process.env.REACT_APP_USER_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    if (
        userID !== undefined &&
        serviceID !== undefined &&
        templateID !== undefined
    ) { init(userID); }

    const template_param = {
        to_name: data.name,
        from_email: data.email,
        title: data.title,
        message: data.body,
    };
    send(serviceID , templateID, template_param).then(() => {
        window.alert('お問い合わせを送信致しました。');
    });
  }

  return (
    <Container maxWidth="sm" sx={{ pt: 5 }}>
    <TemporaryDrawer 
    sx={drawerButtonStyle} 
    />
    
    <h1 className="pageTitle text-center text-5xl my-10">お問い合わせ</h1>

    <p className='mb-2'>
        お問い合わせは、以下のフォームから受け付けております。
        <br />
        SNSからのご連絡でも大丈夫です！
    </p>

      <Stack spacing={3}>
        <TextField
        required
        label="お名前"
        {...register('name')}
        error={'name' in errors}
        helperText={errors.name?.message}
        variant="filled"
        />
        <TextField
          required
          label="メールアドレス"
          type="email"
          {...register('email')}
          error={'email' in errors}
          helperText={errors.email?.message}
          variant="filled"
        />
        <TextField
          required
          label="件名"
          {...register('title')}
          error={'title' in errors}
          helperText={errors.title?.message}
          variant="filled"
        />
        <TextField
          required
          label="お問い合わせ内容"
          {...register('body')}
          error={'body' in errors}
          helperText={errors.body?.message}
          variant="filled"
          multiline
          rows={6}
        />
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleSubmit(onSubmit)}
        >
          送信
        </Button>
      </Stack>
    </Container>
  )
}

export default Contact
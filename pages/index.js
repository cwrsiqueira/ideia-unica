import Head from 'next/head'
import { useState } from 'react'

function Home() {
    const [text, setText] = useState('')
    const [convText, setConvText] = useState('')
    const [convSelect, setConvSelect] = useState('toUpperCase')
    const [qtParags, setQtParags] = useState(0)
    const [qtWords, setQtWords] = useState(0)
    const [qtLetters, setQtLetters] = useState(0)

    function convertStringToSlug (string) {
        string = string.replace(/^\s+|\s+$/g, '')
        string = string.toLowerCase()
      
        const from = 'àáäâãèéëêìíïîòóöôùúüûñç·/_,:;'
        const to = 'aaaaaeeeeiiiioooouuuunc------'
      
        for (let i = 0, l = from.length; i < l; i++) {
          string = string.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
        }
      
        string = string.replace(/[^a-z0-9 -]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
      
        return string
      }

    function converter(selection) {

        // let paragraphs = text.match(/(\r\n|\n|\r)/gm)

        switch (selection) {
            case 'toUpperCase':
                setConvText(text.toUpperCase())            
                break;
            case 'toLowerCase':
                setConvText(text.toLowerCase())
                break;
            case 'capitalize':
                setConvText(text.charAt(0).toUpperCase() + text.slice(1))
                break;
            case 'titleCase':
                setConvText(
                    text.toLowerCase()
                    .split(' ')
                    .map((word) => {
                        return word[0].toUpperCase() + word.slice(1);
                    }).join(' ')
                )
                break;
            case 'inverseTitleCase':
                setConvText(
                    text.toUpperCase()
                    .split(' ')
                    .map((word) => {
                        return word[0].toLowerCase() + word.slice(1);
                    }).join(' ')
                )
                break;
            case 'toggleLowerUpperCase':
                setConvText(
                    text.split(' ')
                    .map((word) => {
                        return word.split('')
                        .map((letter, index) => {
                            if(index % 2 == 0) {
                                return letter.toLowerCase()
                            } else {
                                return letter.toUpperCase()
                            }
                        }).join('')
                    }).join(' ')
                )
                break;
            case 'toggleUpperLowerCase':
                setConvText(
                    text.split(' ')
                    .map((word) => {
                        return word.split('')
                        .map((letter, index) => {
                            if(index % 2 == 0) {
                                return letter.toUpperCase()
                            } else {
                                return letter.toLowerCase()
                            }
                        }).join('')
                    }).join(' ')
                )
                break;
            case 'slug':
                setConvText(convertStringToSlug(text))
                break;
            default:
                setConvText('Opção inválida!')
                break;
        }

        // setQtParags(text.split('.').length -1)
        // setQtWords(text.split(' ').length)
        // setQtLetters(text.split('').length)
    }

    return (
        <>
        <Head>
            <meta property="og:url"                 content="https://charconverter.com/" />
            <meta property="og:type"                content="website" />
            <meta property="og:title"               content="char converter" />
            <meta property="og:description"         content="Conversor de Caracteres" />
            <meta property="og:tags"                content="character, char, converter, caracteres, conversor, uppercase, lowercase, maiusculas, minusculas, letras" />
            <title>Char Converter</title>
            <meta name="description" content="Conversor de Caracteres" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='menu'>
            <h1>Char Converter</h1>
            <h2><small>Conversor de Caracteres</small></h2>
        </div>

        <div className="container">

            <div className='body-up'>

                <div className='body-up-left'>
                    <h2>Digite ou cole o texto para converter</h2>
                    <textarea onChange={e=>setText(e.target.value)}></textarea>
                </div>

                <div className='body-up-right'>
                    <h3>Converter texto para:</h3>
                    <label htmlFor='toUpperCase'><input type='radio' name='select' onClick={(e)=>converter(e.target.value)} id='toUpperCase' value='toUpperCase' />TUDO MAIÚSCULO</label>
                    <label htmlFor='toLowerCase'><input type='radio' name='select' onClick={(e)=>converter(e.target.value)} id='toLowerCase' value='toLowerCase' />tudo minúsculo</label>
                    <label htmlFor='capitalize'><input type='radio' name='select' onClick={(e)=>converter(e.target.value)} id='capitalize' value='capitalize' />Só a primeira letra maiúscula</label>
                    <label htmlFor='titleCase'><input type='radio' name='select' onClick={(e)=>converter(e.target.value)} id='titleCase' value='titleCase' />Todas As Primeiras Letras Maiúsculas</label>
                    <label htmlFor='inverseTitleCase'><input type='radio' name='select' onClick={(e)=>converter(e.target.value)} id='inverseTitleCase' value='inverseTitleCase' />tODAS aS pRIMEIRAS lETRAS mINÚSCULAS</label>
                    <label htmlFor='toggleLowerUpperCase'><input type='radio' name='select' onClick={(e)=>converter(e.target.value)} id='toggleLowerUpperCase' value='toggleLowerUpperCase' />aLtErNaR eNtRe mInÚsCuLaS e mAiÚsCuLaS</label>
                    <label htmlFor='toggleUpperLowerCase'><input type='radio' name='select' onClick={(e)=>converter(e.target.value)} id='toggleUpperLowerCase' value='toggleUpperLowerCase' />AlTeRnAr EnTrE MaIúScUlAs E MiNúScUlAs</label>
                    <label htmlFor='slug'><input type='radio' name='select' onClick={(e)=>converter(e.target.value)} id='slug' value='slug' />transformar-texto-em-slug</label>
                </div>

            </div>

            {/* <select className='select' onChange={(e)=>setConvSelect(e.target.value)}>
                <option value={'toUpperCase'}>TUDO MAIÚSCULO</option>
                <option value={'toLowerCase'}>tudo minúsculo</option>
                <option value={'capitalize'}>Só a primeira letra maiúscula</option>
                <option value={'titleCase'}>Todas As Primeiras Letras Maiúsculas</option>
                <option value={'inverseTitleCase'}>tODAS aS pRIMEIRAS lETRAS mINÚSCULAS</option>
                <option value={'toggleLowerUpperCase'}>aLtErNaR eNtRe mInÚsCuLaS e mAiÚsCuLaS</option>
                <option value={'toggleUpperLowerCase'}>AlTeRnAr EnTrE MaIúScUlAs E MiNúScUlAs</option>
                <option value={'slug'}>transformar-texto-em-slug</option>
            </select>

            <button onClick={()=>converter()}>Clique para Converter</button> */}

            <hr/>

            <div className='body-down'>
                {convText != '' &&
                    <>
                        {/* <p>Parágrafos: {qtParags} - Palavras: {qtWords} - Caracteres: {qtLetters} </p> */}
                        <div className='convertedText'>{convText}</div>
                    </>
                }
            </div>

        </div>
        </>
    )
}

export default Home
import { ButtonUnstyled } from '@mui/base'
import React, { FC } from 'react'

import { CardProps } from './Card.def'
import { styles } from './Card.style'

export const Card: FC<CardProps> = (props) => {
  const { imageSrc, title, buttonLink } = props

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={imageSrc} alt={title} />
      </div>
      <div className={styles.content}>{title}</div>
      <div className={styles.footer}>
        <ButtonUnstyled
          className={styles.button}
          componentsProps={{
            root: { className: styles.buttonRoot },
          }}
          component={'button'}
          href={buttonLink}
        >
          See more
        </ButtonUnstyled>
      </div>
    </div>
  )
}

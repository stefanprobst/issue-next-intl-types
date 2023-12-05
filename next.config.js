import createIntlPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const config = {}

const withIntl = createIntlPlugin('./lib/i18n.ts')

export default withIntl(config)

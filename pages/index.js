export default function Home() {
  return null;
}

export function getServerSideProps({ req }) {
  const redirects = {
    'github': 'https://github.com/maggie-j-liu',
    'website': "https://maggieliu.dev"
  }
  return {
    redirect: {
      destination: redirects[req.headers.host],
      permanent: false
    }
  }
}
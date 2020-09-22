import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

		<form className="contact">
		<div className="container">
			<div className="row">
					<h1>Contact us</h1>
			</div>
			<div className="row">
					<h4>We'd love to hear from you!</h4>
			</div>
			<div className="row input-container">
					<div className="col-xs-12">
						<div className="styled-input wide">
							<input type="text" required />
							<label>Name</label> 
						</div>
					</div>
					<div className="col-md-6 col-sm-12">
						<div className="styled-input email">
							<input type="text" required />
							<label>Email</label> 
						</div>
					</div>
					<div className="col-md-6 col-sm-12">
						<div className="styled-input" >
							<input type="text" required />
							<label>Phone Number</label> 
						</div>
					</div>
					<div className="col-xs-12">
						<div className="styled-input wide">
							<textarea required></textarea>
							<label>Message</label>
						</div>
					</div>
					<div className="col-xs-12">
						<div className="btn-lrg submit-btn">Send Message</div>
					</div>
			</div>
		</div>
		</form>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
		
		.email {
			padding-Right: 5px;
		}

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
		
		body {
    background-color: #444442;
    padding-top: 85px;
	}

	h4 {
		font-family: 'Roboto', sans-serif, 'arial';
		font-weight: 400;
		font-size: 20px;
		color: #9b9b9b;
		line-height: 1.5;
	}

	/* ///// inputs /////*/

	input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
		font-size: 0.75em;
		color: #999;
		top: -5px;
		-webkit-transition: all 0.225s ease;
		transition: all 0.225s ease;
	}

	.styled-input {
		float: left;
		width: 293px;
		margin: 1rem 0;
		position: relative;
		border-radius: 4px;
	}

	@media only screen and (max-width: 768px){
		.styled-input {
			width:100%;
		}
	}

	.styled-input label {
		color: #999;
		padding: 1.3rem 30px 1rem 30px;
		position: absolute;
		top: 10px;
		left: 0;
		-webkit-transition: all 0.25s ease;
		transition: all 0.25s ease;
		pointer-events: none;
	}

	.styled-input.wide { 
		width: 650px;
		max-width: 100%;
	}

	input,
	textarea {
		padding: 30px;
		border: 0;
		width: 100%;
		font-size: 1rem;
		background-color: #2d2d2d;
		color: white;
		border-radius: 4px;
	}

	input:focus,
	textarea:focus { outline: 0; }

	input:focus ~ span,
	textarea:focus ~ span {
		width: 100%;
		-webkit-transition: all 0.075s ease;
		transition: all 0.075s ease;
	}

	textarea {
		width: 100%;
		min-height: 15em;
	}

	.input-container {
		width: 650px;
		max-width: 100%;
		margin: 20px auto 25px auto;
	}

	.submit-btn {
		float: right;
		padding: 7px 35px;
		border-radius: 60px;
		display: inline-block;
		background-color: #4b8cfb;
		color: white;
		font-size: 18px;
		cursor: pointer;
		box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
				  0 2px 10px 0 rgba(0,0,0,0.07);
		-webkit-transition: all 300ms ease;
		transition: all 300ms ease;
	}

	.submit-btn:hover {
		transform: translateY(1px);
		box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
				  0 1px 1px 0 rgba(0,0,0,0.09);
	}

	@media (max-width: 768px) {
		.submit-btn {
			width:100%;
			float: none;
			text-align:center;
		}
	}

	input[type=checkbox] + label {
	  color: #ccc;
	  font-style: italic;
	} 

	input[type=checkbox]:checked + label {
	  color: #f00;
	  font-style: normal;
	}
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
		  background: 
			radial-gradient(#dbdbdb 3px, transparent 4px),
			radial-gradient(#dbdbdb 3px, transparent 4px),
			linear-gradient(#fff 4px, transparent 0),
			linear-gradient(45deg, transparent 74px, transparent 75px, #dbdbdb 75px, #dbdbdb 76px, transparent 77px, transparent 109px),
			linear-gradient(-45deg, transparent 75px, transparent 76px, #dbdbdb 76px, #dbdbdb 77px, transparent 78px, transparent 109px),
		  #fff;
		  background-size: 109px 109px, 109px 109px,100% 6px, 109px 109px, 109px 109px;
		  background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

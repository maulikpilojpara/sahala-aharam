/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line func-names
export default async (context) => {
    // check if user not logged In
    const token = context.$cookies.get('login_token');
    if (token) {
        context.app.router.push('/my-account');
        context.redirect('/my-account');
    }
}

export function ping(_req, res) {
    return res.status(200).send('Backend is alive!');
}
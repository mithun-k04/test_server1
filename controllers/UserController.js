const Emergency = async (req, res) => {
    try {
      const { name } = req.body;
      const image = req.file;
  
      if (!image) {
        return res.status(400).json({ message: 'No image uploaded!' });
      }
  
      return res.status(200).json({
        name,
        image: image.filename,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
  };
  
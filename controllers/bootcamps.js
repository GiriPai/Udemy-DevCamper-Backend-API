// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @desc    Get simgle bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Single  bootcamps" });
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps/
// @access  PRIVATE
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Creating bootcamps" });
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  PRIVATE
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Update  bootcamps" });
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Delete  bootcamps" });
};
